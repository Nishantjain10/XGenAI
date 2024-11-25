export type TwitterUser = {
    id: string;
    name?: string;
    username?: string;
};

export type TwitterMention = {
    id: string;
    text: string;
    author_id?: string;
    created_at?: string;
}; 