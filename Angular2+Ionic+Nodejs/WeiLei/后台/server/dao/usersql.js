/**
 * Created by yaochao on 2017/8/28.
 */
exports.sql={
    getPasswordById:'select password,id,user_icon from userinfo where phone=?',
    addUser:'insert into userinfo(phone,password,cometime) values(?,?,NOW())',
    getInfo:'select u.id,u.name,u.cometime,u.signature,u.sex,u.profession,u.production_number,u.collection_number,u.user_icon,p2.name homeS,c2.name homeC,p1.name nowS,c1.name nowC from userinfo u join (city c2 join province p2 on c2.province_id=p2.pycode)  on u.homecity_id=c2.id join (city c1 join province p1 on c1.province_id=p1.pycode)  on u.nowcity_id=c1.id   where u.id=?',
    getMenus:'select r.id,r.name,r.cover_pic,r.cook_times,r.collect_times,u.name creater,u.id creater_id from recipes r join userinfo u on r.creater_id=u.id where u.id=?',
    getUsers:'select u.id,u.name,u.user_icon,u.production_number from userinfo u ',
    getlists:'select r.id,r.name,r.cover_pic,r.descripe,r.collect_times,u.id creater_id,u.name creater,count(r.id) recipe_num from (recipe_list r join userinfo u on r.creater_id=u.id) join addrecipes a on r.id=a.list_id where u.id=? GROUP BY r.id',
    getpersonallists:'select r.id,r.name,r.cover_pic,r.descripe,u.id creater_id,u.name creater from recipe_list r join userinfo u on u.id=r.creater_id where u.id=?',
    getWorks:'select w.id, w.name,w.cover_pic,w.reciper_id,w.descripe,w.create_time,w.thumb_numbers from works w join userinfo u on w.creater_id = u.id where u.id=? ORDER BY id',
    getComments:'select c.id,c.comment_date,c.content,c.reply,c.commenter_id,u.name commenter,u.user_icon from comment c join userinfo u on c.commenter_id = u.id where c.master_id=? ORDER BY c.comment_date DESC',
    addComments:'insert into comment(commenter_id,master_id,content,comment_date) values(?,?,?,NOW())',
    deleteComment:'delete from comment where id=?',
    getCollectRecipes:'select r.id reciper_id,r.name,r.cover_pic,r.descripe,r.creater_id creater_id,u2.name creater from recipes r join collect_recipe c on c.recipe_id=r.id join userinfo u1 on u1.id=c.collecter_id join userinfo u2 on u2.id=r.creater_id where u1.id=?',
    getCollectLists:'select r.id reciper_id,r.name,r.cover_pic,r.descripe,r.creater_id creater_id,u2.name creater from recipe_list r join collect_list c on c.list_id=r.id join userinfo u1 on u1.id=c.user_id join userinfo u2 on u2.id=r.creater_id where u1.id=?',
    followWho:'select u.id,u.name,u.user_icon from follow f join userinfo u on u.id=f.follower_id  where f.user_id=?',
    followByWho:'select u.id,u.name,u.user_icon from follow f join userinfo u on u.id=f.user_id  where f.follower_id=?',
    Unfollowedusers:'select u.id,u.name,u.signature,u.user_icon from userinfo u where u.id not in (select f.follower_id from follow f where f.user_id=?) && u.id!=?',
    checkFollow:'select count(1) hasFollowed from follow f where f.follower_id=? && f.user_id =?',
    Follow_user:'insert into follow(follower_id,user_id) values (?,?)',
    Unfollower_user:'DELETE from follow where follower_id=? && user_id=?',

    checkThumb:'select count(1) hasThumbed from thumb_tb t where t.work_id=? && t.user_id =?',
    Thumb_work:'insert into thumb_tb(work_id,user_id) values (?,?)',
    addThumb_num:'UPDATE works set thumb_numbers = thumb_numbers + 1 where id = ?',
    Unthumb_work:'DELETE from thumb_tb where work_id=? && user_id=?',
    delThumb_num:'UPDATE works set thumb_numbers = thumb_numbers - 1 where id = ?',

    UpdateInfo:'UPDATE userinfo set name=?,signature=?,sex=?,homecity_id=?,nowcity_id=?,profession=?,user_icon=? where id=?',
    BasicInfo:'SELECT u.id, u.name,u.signature,u.user_icon from userinfo u where u.id=? ',

    ResetPassword:'update userinfo set password = ? where phone = ?',
    delPersonalWork:'delete from works where id = ?'


    //createToken:'update userInfo set u_token=? where u_telephone=?'
}