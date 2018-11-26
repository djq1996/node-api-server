import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { UtilService } from '../service/util.service';
import { Router } from '@angular/router';
import { FactoryOrValue } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = {
    name: '',
    password: ''
  };
  btnDisabled = false;
  constructor(
    private http: HttpService,
    private router: Router,
    private util: UtilService
  ) {}

  ngOnInit() {}
  loginEvent() {
    if (!this.login.name) {
      this.util.openSnackBar('用户名不正确', '关闭');
    } else if (this.login.password.length < 6) {
      this.util.openSnackBar('密码不正确', '关闭');
    } else {
      this.btnDisabled = true;
      this.http.loginPost(this.login).subscribe((res: any) => {
        console.log(res);
        if (res.success) {
          this.router.navigate(['/overview']);
        }
        this.util.openSnackBar(res.msg, '关闭');
        this.btnDisabled = false;
      });
    }
  }
}
