import supabase from "./supabase.js";

export async function login({email, password}) {

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })
    if (error)  throw new Error(error.message);
    return data;
}

export async function gerCurrentUser() {
    const {data:session}=await supabase.auth.getSession();

    if (!session.session) return null;

    const {data, error} = await supabase.auth.getUser();

    if (error)  throw new Error(error.message);
    console.log(data)
    return data?.user;
}