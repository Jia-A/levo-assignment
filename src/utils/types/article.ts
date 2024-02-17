export interface Article {
    id ?: number, 
    published_at ?: string,
    summary ?: string, 
    title ?: string, 
    url ?: string
}

export interface Articles {
    article : Article[]
}