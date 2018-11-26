import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';
import { UtilService } from '../service/util.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register = {
    name: '',
    mailbox: '',
    password: ''
  };
  btnDisabled = false;
  constructor(
    private http: HttpService,
    private router: Router,
    private util: UtilService
  ) {}

  ngOnInit() {}
  registerEvent() {
    if (!this.register.name) {
      this.util.openSnackBar('用户名不正确', '关闭');
    } else if (!this.util.checkEmail(this.register.mailbox)) {
      this.util.openSnackBar('邮箱不正确', '关闭');
    } else if (this.register.password.length < 6) {
      this.util.openSnackBar('密码至少6位', '关闭');
    } else {
      this.btnDisabled = true;
      this.http.registerPost(this.register).subscribe((res: any) => {
        console.log(res);
        if (res.success) {
          this.router.navigate(['/login']);
        }
        this.util.openSnackBar(res.msg, '关闭');
        this.btnDisabled = false;
      });
    }
  }
}
