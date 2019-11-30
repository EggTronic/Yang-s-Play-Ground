class Node():
    def __init__(self, value):
        self.value = value
        self.next = None


def Inverse(node):
    if node == None or node.next == None:
        return node
    else:
        newHead = Inverse(node.next)
        node.next.next = node
        node.next = None
        return newHead


if __name__ == "__main__":
    head = Node(0)
    temp = head
    inverse = head
    for i in range(1, 5):
        temp.next = Node(i)
        temp = temp.next

    while head != None:
        print(head.value)
        head = head.next

    inverse = Inverse(inverse)
    while inverse != None:
        print(inverse.value)
        inverse = inverse.next
