exports.sql={
    getPasswordById:'select user_id,user_name,user_password from user where user_telephone=?',
    addUser:'insert into user(user_name,user_password,user_telephone) values(?,?,?)',
    createToken:'update user set token=? where telephone=?',
    addUserIcon:'call addUserIcon(?,?,@res)',
    updateUserIcon:'INSERT INTO `article` (`userName`, `artPic`, `artContent`,userId) VALUES (?,?,?,?);',
    getAllText:'SELECT * FROM article;'
};