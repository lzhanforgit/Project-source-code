package com.whw.ssmsboot;

import javax.servlet.MultipartConfigElement;
import javax.sql.DataSource;

import org.apache.catalina.filters.SetCharacterEncodingFilter;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.mchange.v2.c3p0.ComboPooledDataSource;
import com.whw.ssmsboot.constant.Constant;
import com.whw.ssmsboot.filter.EncodingFilter;

import ch.qos.logback.core.filter.Filter;

@EnableTransactionManagement // 启注解事务管理，等同于xml配置方式的 <tx:annotation-driven />
@SpringBootApplication
@MapperScan("com.whw.ssmsboot.mapper")
@ServletComponentScan
public class WanHuiWangApplication {

	@Autowired
	private DataSource dataSource;

	@Bean // 将返回的实例作为bean放到spring ioc容器中
	@ConfigurationProperties(prefix = "c3p0")
	public DataSource dataSource() {
		dataSource = DataSourceBuilder.create().type(ComboPooledDataSource.class).build();
		return dataSource;
	}

	@Bean
	public SqlSessionFactory sqlSessionFactoryBean() throws Exception {

		SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();

		sqlSessionFactoryBean.setDataSource(dataSource);

		sqlSessionFactoryBean.setTypeAliasesPackage("com.whw.ssmsboot.pojo");

		PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();

		sqlSessionFactoryBean.setMapperLocations(resolver.getResources("classpath:mapper/*Mapper.xml"));

		return sqlSessionFactoryBean.getObject();
	}

	@Bean
	public PlatformTransactionManager transactionManager() {
		return new DataSourceTransactionManager(dataSource);
	}

	

	@Bean
	public MultipartConfigElement multipartConfigElement() {
	    MultipartConfigFactory factory = new MultipartConfigFactory();

	    factory.setLocation(Constant.SOURCE_PATH);

	    return factory.createMultipartConfig();
	}

	
	public static void main(String[] args) {
		SpringApplication.run(WanHuiWangApplication.class, args);
	}
}
