package com.tao.controller;

import com.tao.domain.Approve;
import com.tao.service.ApproveService;
import com.tao.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/approves")
public class ApproveController {
    @Autowired
    private ApproveService approveService;

    @Autowired
    private PostService postService;

    @PostMapping
    public Result addApprove(@RequestBody Approve approve){
        boolean flag = approveService.addApprove(approve);
        postService.approvePlus1(approve.getPid());

        return new Result(flag?Code.SAVE_OK:Code.SAVE_ERR,flag);
    }

    @DeleteMapping("/{id}/{pid}")
    public Result cancelApprove(@PathVariable Integer id,@PathVariable Integer pid) {
        boolean flag = approveService.cancelApprove(id);
        postService.approveSub1(pid);
        return new Result(flag?Code.DELETE_OK:Code.DELETE_ERR,flag);
    }

    @GetMapping("/{pid}/{uid}")
    public Result isApproveExist(@PathVariable Integer pid,@PathVariable Integer uid){
        Approve approve = approveService.getApproveByPidAndUid(pid, uid);
        Integer code = approve != null ? Code.GET_OK :Code.GET_ERR;
        String msg = approve != null ? "查询成功" : "没有这个映射";
        return new Result(code,approve,msg);
    }

    @GetMapping("/{pid}")
    public Result getApproveCountByPid(@PathVariable Integer pid){
        Integer approve = approveService.getApproveCountByPid(pid);
        return new Result(approve != null ? Code.GET_OK:Code.GET_ERR,approve);
    }
}
