import { rl } from "../models/Connect.js";
import { showLogin } from "../view/LoginView.js";
import { home } from "../c18.js";
import { loginUsername } from "../models/Login.js";


export default class LoginController {
    static login() {
        rl.question(`username: `, async (answer) => {
            await loginUsername(answer).then((x) => {
                if (answer == x.username) {
                    rl.question(`password: `, (answer2) => {
                        if (answer2 == x.password) {
                            showLogin(x);
                            home()
                        } else {
                            console.log(`password yang anda masukan salah , silahkan coba lagi.`)
                            LoginController.login()
                        }
                    })
                }
            }).catch((x) => {
                console.log(`Username tidak terdaftar`)
                LoginController.login()
            })
        })
    }
}