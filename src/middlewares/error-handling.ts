export default async function errorHandler(anyFunction?: any) {
    try {
        return await anyFunction
    } catch (err: any) {
        throw new Error(err)
    }
}
