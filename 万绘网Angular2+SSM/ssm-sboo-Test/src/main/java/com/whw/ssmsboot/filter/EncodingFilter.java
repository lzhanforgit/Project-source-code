package com.whw.ssmsboot.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebFilter(filterName="encodingFilter",urlPatterns="/*")
public class EncodingFilter implements Filter{

	/**
	 * 默认编码
	 */
	private String charset = "utf-8";
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		String ca = filterConfig.getInitParameter("charset");
		if(null != ca) {
			charset = ca;
		}
	}

	@Override
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
			throws IOException, ServletException {
		
		req.setCharacterEncoding(charset);
		res.setCharacterEncoding(charset);
		res.setContentType("text/html;charset=" + charset);
		
		HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;
		
		response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers", "x-requested-with");
        response.setHeader("Access-Control-Allow-Credentials","true"); //是否支持cookie跨域
		
		chain.doFilter(req, res);
		
	}

	@Override
	public void destroy() {
		
	}

}
