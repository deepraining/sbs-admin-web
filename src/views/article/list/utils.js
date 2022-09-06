import { formatInputItem } from '../../../utils/format';

export function checkItemValid(item) {
  const newItem = formatInputItem(item);

  if (!newItem.title) return '标题不能为空';
  if (!newItem.intro) return '简介不能为空';
  if (!newItem.content) return '内容不能为空';

  return newItem;
}
