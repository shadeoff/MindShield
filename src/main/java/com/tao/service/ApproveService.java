package com.tao.service;

import com.tao.domain.Approve;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface ApproveService {
    /**
     * 点赞，点击按钮，赞数+1
     * @param approve
     * @return
     */
    public boolean addApprove(Approve approve);

    /**
     * 取消点赞
     * @param id
     * @return
     */
    public boolean cancelApprove(Integer id);

    /**
     * 通过pid和uid一起判断点赞是否存在
     *
     * @param pid
     * @param uid
     * @return
     * true:赞存在
     * false：赞不存在
     */
    public Approve getApproveByPidAndUid(Integer pid,Integer uid);

    /**
     * 获取该帖子点赞数
     * @return
     */
    public Integer getApproveCountByPid(Integer pid);
}
