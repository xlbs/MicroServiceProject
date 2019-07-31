package com.xlbs.jobservice.jobsample.simplejob;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobParameters;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SimpleBatchJobMain {

    public static void main(String[] args) {
        // 获取配置文件
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(new String[] {"classpath:/config/spring-batch.xml"});
        // 获取任务启动器
        JobLauncher jobLauncher = context.getBean(JobLauncher.class);
        Job job = context.getBean("simpleJob",Job.class);
        try {
            JobExecution result = jobLauncher.run(job, new JobParameters());
            System.out.println("SimpleJob Run Result: " + result.toString());
        }catch (Exception e){
            e.printStackTrace();
        }
    }

}
