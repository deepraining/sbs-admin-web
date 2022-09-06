import { formatInputItem } from '../../../utils/format';

export function checkItemValid(item) {
  const newItem = formatInputItem(item);

  if (!newItem.username) return '用户名不能为空';
  if (!newItem.email) return '电子邮箱不能为空';
  if (!newItem.password) return '密码不能为空';

  return newItem;
}
