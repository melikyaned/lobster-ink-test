import {Component, Input} from '@angular/core';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {
  @Input() tree: TreeNode<string>[] = [];

  leafNode: TreeNode<string> | undefined;

  onNodeSelect(node: TreeNode): void {
    if (node.children && node.children[0].leaf) {
      this.leafNode = node.children[0];
    }

    node.expanded = true;
  }

  hideNode(node: TreeNode): void {
    node.expanded = false;
  }
}
