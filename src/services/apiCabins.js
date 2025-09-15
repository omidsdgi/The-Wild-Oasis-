import supabase, {supabaseUrl} from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createCabin(newCabin) {
  const imageName = newCabin.image.name

  const imagePath=`${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  const { data, error } = await supabase
      .from('cabins')
      .insert([{...newCabin,image:imagePath}])
      .select()

  if (error){
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  const { error:storageError } = await supabase.storage
      .from('cabin-images')
      .upload(imageName, newCabin.image ,{ upsert: true })

  if(storageError){
    await supabase
        .from('cabins').delete()
        .eq('id', data[0].id)
    if (error){
      console.error(storageError);
      throw new Error("Cabin image could not bo uploaded and the cabin could not be created");
    }
  }
  return data;
}

export async function uploadTest(file) {
  if (!file) throw new Error("No file provided");

  // اسم فایل اصلی
  const imageName = file.name;

  // مسیر دسترسی عمومی
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // آپلود به bucket
  const { data, error } = await supabase.storage
      .from("cabin-images") // اسم bucket
      .upload(imageName, file, {
        cacheControl: "3600",
        upsert: true, // برای تست بزاریم true که اگر وجود داشت overwrite بشه
      });

  if (error) {
    console.error("Upload error:", error);
    throw new Error("Image upload failed");
  }

  console.log("Uploaded image path:", imagePath);
  return imagePath;
}

export async function deleteCabin(id) {

  const {data, error } = await supabase
      .from('cabins')
      .delete()
      .eq('id', id)
  if (error){
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
  return data;
}

