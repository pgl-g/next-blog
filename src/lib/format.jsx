import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

export default function format(type, format) {
  return dayjs(type).format(format)
}