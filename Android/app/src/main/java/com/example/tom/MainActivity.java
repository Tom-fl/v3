package com.example.tom;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import android.app.Activity;

import android.webkit.WebView;

import android.webkit.WebViewClient;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //设置一个Activity的显示界面，
        setContentView(R.layout.activity_main);


        WebView  view=findViewById(R.id.web_view);

        //设置 WebView 属性，能够执行 Javascript 脚本
        view.getSettings().setJavaScriptEnabled(true);

        //加载需要显示的网页    也可以是本地启的服务地址
        view.loadUrl("http://113.142.151.144:8001");

        view.setWebViewClient(new WebViewClient());

    }
}