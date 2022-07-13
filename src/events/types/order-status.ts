export enum OrderStatus {
  // 訂單建立, 但票券尚未保留
  Created = 'created',

  // 訂單被取消
  // 要訂購的票券已經被其他人保留了
  // 訂單已過期、尚未付款
  Cancelled = 'cancelled',

  // 訂單已經成功保留票券, 等待付款
  AwaitingPayment = 'awaiting:payment',

  // 訂單已完成付款
  Complete = 'complete',
}
