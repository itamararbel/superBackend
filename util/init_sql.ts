import dal from "../dal/dal"

const schema = "vacation_project"
const usersTable = "CREATE TABLE IF NOT EXISTS "+ schema +".`users_table` (`user_id` INT NOT NULL AUTO_INCREMENT,`first_name` VARCHAR(45) NULL,`family_name` VARCHAR(45) NULL,`user_name` VARCHAR(45) NULL,`password` VARCHAR(45) NULL, PRIMARY KEY (`user_id`))"
const vacationTable = "CREATE TABLE IF NOT EXISTS "+ schema +".`vacation_table` (`vacation_id` INT NOT NULL AUTO_INCREMENT, `destenation` VARCHAR(45) NULL , `description` VARCHAR(250) NULL, `picture` VARCHAR(200) NULL,`start_date` DATE NULL,`end_date` DATE NULL,`price` INT NULL,`follow_num` INT NULL, PRIMARY KEY (`vacation_id`))"
const followTable = "CREATE TABLE IF NOT EXISTS "+schema+".`follow_table` ( `user_id` INT NOT NULL, `vacation_id` INT NOT NULL, PRIMARY KEY (`user_id`, `vacation_id`));"

const sqlInit = ()=>{
dal.execute(usersTable)
dal.execute(vacationTable);
dal.execute(followTable);
  }


export default sqlInit;