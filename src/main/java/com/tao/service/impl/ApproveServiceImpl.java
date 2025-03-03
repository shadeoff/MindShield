package com.tao.service.impl;

import com.tao.dao.ApproveDao;
import com.tao.domain.Approve;
import com.tao.service.ApproveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApproveServiceImpl implements ApproveService {
    @Autowired
    private ApproveDao approveDao;


    public boolean addApprove(Approve approve) {
        approveDao.save(approve);
        return true;
    }

    public boolean cancelApprove(Integer id) {
        approveDao.deleteById(id);
        return true;
    }

    public Approve getApproveByPidAndUid(Integer pid, Integer uid) {
        return approveDao.getApproveByPidAndUid(pid, uid) ;
    }

    public Integer getApproveCountByPid(Integer pid) {

        return approveDao.getCountByPid(pid);
    }



}
