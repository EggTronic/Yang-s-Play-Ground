function Tree(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function hlr(root) {
    console.log('Start 前续遍历' + '\n');

    let stack = [];
    let head = root;

    while (head || stack.length > 0) {
        while (head) {
            console.log(head.val);
            stack.push(head);
            head = head.left;
        }

        if (stack.length > 0) {
            let cur = stack.pop();
            head = cur.right;
        }
    }
}

function lhr(root) {
    console.log('\n' + 'Start 中续遍历');

    let stack = [];
    let head = root;

    while (head || stack.length > 0) {
        while (head) {
            stack.push(head);
            head = head.left;
        }

        if (stack.length > 0) {
            let cur = stack.pop();
            console.log(cur.val);
            head = cur.right;
        }
    }
}

function lrh(root) {
    console.log('\n' + 'Start 后续遍历');

    let stack = [];
    let head = root;

    while (head || stack.length > 0) {
        while (head) {
            stack.push([head, 1]);
            head = head.left;
        }

        if (stack.length > 0) {
            let cur = stack.pop();
            if (cur[1] === 1) {
                cur[1] = 2;
                stack.push(cur);
                head = cur[0].right;
            } else {
                console.log(cur[0].val);
                head = null;
            }
            
        }
    }
}

function makeTree() {
    let tree = new Tree(1);
    tree.left = new Tree(2);
    tree.right = new Tree(3);
    return tree;
}

function makeTree() {
    let tree = new Tree(1);
    tree.left = new Tree(2);
    tree.right = new Tree(3);
    return tree;
}

hlr(makeTree());
lhr(makeTree());
lrh(makeTree());