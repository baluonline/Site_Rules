export const targetTreeItem = 1231
export const TreeItems = [
  {
    id: 1,
    name: 'A',
    children: [
      {
        id: 11,
        name: 'A11'
      },
      {
        id: 12,
        name: 'A12',
        children: [
          {
            id: 121,
            name: 'A121'
          },
          {
            id: 122,
            name: 'A122'
          },
          {
            id: 123,
            name: 'A123',
            children: [
              {
                id: 1231,
                name: 'A1231'
              },
              {
                id: 1232,
                name: 'A1232'
              }
            ]
          }
        ]
      },
      {
        id: 13,
        name: 'A13'
      },
      {
        id: 14,
        name: 'A14'
      }
    ]
  },
  {
    id: 2,
    name: 'B',
    children: [
      {
        id: 21,
        name: 'B1'
      }
    ]
  }
]

export function TreeviewTraverse1 (TreeItems, targetId) {
  TreeItems.forEach(item => {
    console.log(item.id)
    if (item.id === targetId) {
      console.log('target Item name: ' + item.name)
      return targetId
    }
    if (item.children) {
      TreeviewTraverse(item.children, tage)
    } else return
  })
}

export function TreeviewTraverse (tree, target) {
  var result,
    done = false,
    path = {}

  function traverse (tree, target, root) {
    tree.forEach(key => {
      if (!done) {
        if (key.id === target) {
          path[root].push(target)
          result = path[root]
          done = true
          //   console.log(path)
          return
        } else {
          if (key.children) {
            path[root].push(key.id)
            return traverse(key.children, target, root)
          }
          return
        }
      }
    })
    if (!done) {
      path[root].pop()
    }
    return
  }
  var roots = Object.keys(tree)
  roots.forEach(root => {
    path[root] = [tree[root].id]
    traverse(tree[root].children, target, root)
  })
  return result
}
