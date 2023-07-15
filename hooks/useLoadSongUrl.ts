import { Song } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadSongUrl = (song: Song) => {
    // we could use 'useSessionContext' to extract supabase client if we want to use authenticated users to access songs
    const supabaseClient = useSupabaseClient();

    if (!song) {
        return '';
    }

    const { data: songData } = supabaseClient
        .storage
        .from('songs')
        .getPublicUrl(song.song_path);
        
    return songData.publicUrl;
}

export default useLoadSongUrl;