//import connection from "../../config/db";
import { db } from "../../config/db";
import { DataType } from "sequelize-typescript";
import { Model } from "sequelize";
import { v4 as uuidv4 } from "uuid";


class Video extends Model {
  public id!: string;
  public title!: string;
  public comments!: string;
  public url!: string
}

Video.init(
  {
    id: {
      type: DataType.UUID,
      primaryKey: true
    },
    title: {
      type: DataType.STRING,
      allowNull: true
    },
    comments: {
      type: DataType.STRING(400),
      allowNull: true
    },
    url: {
      type: DataType.STRING,
      allowNull: false
    }
  },
  {
    timestamps: true,
    sequelize: db.sequelize,
  }
);

Video.beforeCreate((video) => {
  video.id = uuidv4();
});



export default Video;
