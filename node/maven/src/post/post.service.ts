
import {PostModel} from './post.model';
import {connection} from '../app/database/mysql';
/**
 * 新增文章
 */
export const createPost= async (post:PostModel)=>{
    const statement=`
        INSERT INTO post
        SET ? 
    `;
     // 每次访问都走数据库吗？
     // 保存
     // list select redis
    const [data]=await connection.promise().query(statement,post);
    return data
}