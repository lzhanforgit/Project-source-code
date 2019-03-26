package com.whw.ssmsboot.configuer;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.whw.ssmsboot.interceptor.CrossDomain;

@Configuration
public class MyWebAppConfigurer extends WebMvcConfigurerAdapter {
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
//		registry.addInterceptor(new AdminInterceptor()).addPathPatterns("/admin/test");
//		registry.addInterceptor(new UserInterceptor()).addPathPatterns("/lrc/*");
		registry.addInterceptor(new CrossDomain()).addPathPatterns("/*");
		super.addInterceptors(registry);
	}
}
