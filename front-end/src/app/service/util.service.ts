import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor(private snackBar: MatSnackBar) {}
  // 检查邮箱的合法性
  checkEmail(str: string) {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
      str
    );
  }
  // 打开提示框
  openSnackBar(message: string, btnText: string) {
    this.snackBar.open(message, btnText, {
      duration: 1000,
      // horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
