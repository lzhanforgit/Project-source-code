package com.whw.ssmsboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.whw.ssmsboot.pojo.Painter;
import com.whw.ssmsboot.serivce.PainterService;

@Controller
@RequestMapping("painter")
public class PainterController {
      @Autowired
      private PainterService painter;
      
      @RequestMapping(value="findAllInfo",method=RequestMethod.GET)
      @ResponseBody
      public Map<String,Object> findAllInfo(){
    	  Map<String,Object> map = new HashMap<String,Object>();
    	  List<Painter> paint = painter.findAllPainterInfo();
    	  map.put("result", paint);
    	  return map;
      }
}
