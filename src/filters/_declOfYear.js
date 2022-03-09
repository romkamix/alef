import { declOfNum } from "../helpers";
const decls = ["год", "года", "лет"];

export default (v) => `${v} ${declOfNum(v, decls)}`;
