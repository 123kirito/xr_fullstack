export const show=async(request,response)=>{
    const {postId}=request.params;
    response.send(`Hello,post${postId}`);
}