const url: string = 'https://jsonplaceholder.typicode.com/posts'

export function getPosts(){
    const res = fetch(url)
    return res
}