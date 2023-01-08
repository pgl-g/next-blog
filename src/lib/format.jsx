import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

export default function format(type, format) {
  return dayjs(type).format(format)
}