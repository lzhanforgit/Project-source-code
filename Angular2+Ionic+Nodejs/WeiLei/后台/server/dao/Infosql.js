exports.sql={
    getProvince:'select * from province',
    getSocialUpdate:'SELECT userinfo.name user_name,userinfo.user_icon,follow.follower_id,recipes.id,recipes.name reccipe_name,recipes.descripe,recipes.cook_times,recipes.cover_pic,recipes.create_time,recipes.collect_times from (follow JOIN recipes ON user_id=? && follow.follower_id=recipes.creater_id )JOIN userinfo ON userinfo.id=follow.follower_id ORDER BY create_time DESC',
    getFollowers:'select u.id,u.name,u.signature,u.user_icon,u.production_number,u.collection_number from follow f join userinfo u on u.id=f.follower_id where f.user_id = ?'
}