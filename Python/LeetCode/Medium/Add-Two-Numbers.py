# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


def calculateNumber(l: ListNode) -> int:
    temp = l
    lt = []
    while temp != None:
        lt.append(temp.val)
        temp = temp.next
    sum = int(''.join(str(i) for i in lt[::-1]))
    return sum


class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        num1 = calculateNumber(l1)
        num2 = calculateNumber(l2)
        result = int(num1 + num2)
        numList = list(map(int, str(result)))
        return numList[::-1]
