import { supabase } from '../api/supabaseClient';

export async function getDocuments(filters = {}) {
    let query = supabase.from('documents').select('*');


    Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {

            if (key === 'created_at') {
                console.log(key, 'keykeykeykeykeykey')
                query = query.order(value, { ascending: true });
            }

            else if (Array.isArray(value)) {
                query = query.in(key, value);
            }

            else {
                query = query.eq(key, value);
            }
        }
    });

    const { data, error } = await query;

    if (error) {
        console.error('Ошибка при получении документов:', error);
        return [];
    }
    return data;
}


export async function createDocument(document) {
    const { data, error } = await supabase
        .from('documents')
        .insert([document]);

    if (error) {
        console.error('Ошибка при создании документа:', error);
        return null;
    }
    return data;
}

export async function updateDocument(id, document) {
    const { data, error } = await supabase
        .from('documents')
        .update(document)
        .eq('id', id);

    if (error) {
        console.error('Ошибка при обновлении документа:', error);
        return null;
    }
    return data;
}

export async function deleteDocument(id) {
    const { data, error } = await supabase
        .from('documents')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Ошибка при удалении документа:', error);
        return null;
    }
    return data;
}
