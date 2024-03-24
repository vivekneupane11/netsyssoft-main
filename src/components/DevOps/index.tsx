import terra from '@/assets/1_9-ILOQ1Yxautyc_uIguhVw.png';
import kub from '@/assets/6.png';
import docker from '@/assets/Docker-Logo.png';
import git from '@/assets/GitHub-logo.png';
import jen from '@/assets/Jenkins.webp';
import poth from '@/assets/Prometheus-metaimage.png';
import aws from '@/assets/images.jpeg';
import ansible from '@/assets/key-features-and-specific-roles-of-Ansible.png';
import nss from '@/assets/nss-devops-blue.png';
import py from '@/assets/py.png';

import Image from "next/image";
export default function DevOps() {
  return (
    <div id="devops" className=" flex flex-col justify-around mt-[120px] border-b-4 pb-[70px] border-gray-100">
    <section className=" flex flex-col items-center justify-center text-center ">
    <h2 className="text-4xl font-bold  mb-8 font-sans">DevOps Contents</h2>

<ol className="items-center sm:flex py-10" >
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white  sm:ring-8  shrink-0">
                <svg className="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
        </div>
        <div className="mt-3 sm:pe-8">
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">Level #1</time>
            <p className="text-base font-normal text-gray-800 px-2 ">Level 1 is core DevOps Engineering.</p>
        </div>
    </li>
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white  sm:ring-8  shrink-0">
                <svg className="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
        </div>
        <div className="mt-3 sm:pe-8">
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">Level #2</time>
            <p className="text-base font-normal text-gray-800 px-2 ">Level 2 advanced DevOps Engineering.</p>
        </div>
    </li>
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white  sm:ring-8 shrink-0">
                <svg className="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
        </div>
        <div className="mt-3 sm:pe-8">
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">Level #3</time>
            <p className="text-base font-normal text-gray-800 px-2 ">Level 3 is Internship and Project Level.</p>
        </div>
    </li>
</ol>

<div className="shadow-xl flex flex-col lg:flex-row justify-between mt-20  relative p-5 py-2 rounded-lg" >
<span className='absolute top-0 left-[-10px] flex justify-center font-bold items-center text-white shadow-lg rounded-full h-10 w-10' style={{background:'blue'}}>1</span>
<div className='flex flex-col py-10 '>
    <h1 className='font-bold text-3xl text-left font-sans' style={{color:'blue'}}> Linux Command</h1>
    <p className='py-5 px-0 w-[90%] text-left font-sans'>In this module you will learn the Linux basic commands which are helpful as a DevOps Engineer. As well as you will learn shell scripting which will help you to write shell programs required as a DevOps Engineer.</p>
</div>
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-2/3 p-4">
    <Image src={nss} alt="Image 3" className="w-full h-auto shadow-md" style={{height:"220px",objectFit:'cover',borderRadius:'12px',minWidth:'300px'}} />
  </div></div>


  <div className="shadow-xl flex flex-col lg:flex-row justify-between mt-20  relative p-5 py-2 rounded-lg" >
<span className='absolute top-0 left-[-10px] flex justify-center font-bold items-center text-white shadow-lg rounded-full h-10 w-10' style={{background:'blue'}}>2</span>
<div className='flex flex-col py-10 '>
    <h1 className='font-bold text-3xl text-left font-sans' style={{color:'blue'}}> GitHub</h1>
    <p className='py-5 px-0 w-[90%] text-left font-sans'>In this module you will learn about GitHub repository and git commands. You will learn to create your own code repositories lo cally and synchronize them with remote GitHub repositories. You will learn about cloning, saving, commiting, pushing, branching and mer ging git commands.</p>
</div>
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-2/3 p-4">
    <Image src={git} alt="Image 3" className="w-full h-auto " style={{height:"220px",objectFit:'cover',borderRadius:'12px',minWidth:'300px'}} />
  </div></div>


  <div className="shadow-xl flex flex-col lg:flex-row justify-between mt-20  relative p-5 py-2 rounded-lg" >
<span className='absolute top-0 left-[-10px] flex justify-center font-bold items-center text-white shadow-lg rounded-full h-10 w-10' style={{background:'blue'}}>3</span>
<div className='flex flex-col py-10 '>
    <h1 className='font-bold text-3xl text-left font-sans' style={{color:'blue'}}> AWS</h1>
    <p className='py-5 px-0 w-[90%] text-left font-sans'>In this module you will learn basics of AWS Cloud Computing Services. You will learn about EC2, Autoscaling Group, Elastic Loa d Balancer, VPC, RDS, S3, Codecommit, Codebuild, Codedeploy, Codepipeline, SNS and SQS.</p>
</div>
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-2/3 p-4">
    <Image src={aws} alt="Image 3" className="w-full h-auto " style={{height:"220px",objectFit:'cover',borderRadius:'12px',minWidth:'300px'}} />
  </div></div>


  <div className="shadow-xl flex flex-col lg:flex-row justify-between mt-20  relative p-5 py-2 rounded-lg" >
<span className='absolute top-0 left-[-10px] flex justify-center font-bold items-center text-white shadow-lg rounded-full h-10 w-10' style={{background:'blue'}}>4</span>
<div className='flex flex-col py-10 '>
    <h1 className='font-bold text-3xl text-left font-sans' style={{color:'blue'}}> Terraform</h1>
    <p className='py-5 px-0 w-[90%] text-left font-sans'>In this module you will learn terraform as IaC and deploy AWS resources through the use of terraform apply without using the AWS console. You will be performing a complete AWS basic infrastructure building (VPC, Subnet, Route Tables, Interne t Gateway, NAT Gateway, Security Group and EC2 using terraform.</p>
</div>
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-2/3 p-4">
    <Image src={terra} alt="Image 3" className="w-full h-auto " style={{height:"220px",objectFit:'cover',borderRadius:'12px',minWidth:'300px'}} />
  </div></div>


  <div className="shadow-xl flex flex-col lg:flex-row justify-between mt-20  relative p-5 py-2 rounded-lg" >
<span className='absolute top-0 left-[-10px] flex justify-center font-bold items-center text-white shadow-lg rounded-full h-10 w-10' style={{background:'blue'}}>5</span>
<div className='flex flex-col py-10 '>
    <h1 className='font-bold text-3xl text-left font-sans' style={{color:'blue'}}> Docker</h1>
    <p className='py-5 px-0 w-[90%] text-left font-sans'>In this module you will learn about creating containers using docker. You learn creating custom images to push ing the image to docker hub to creating a full fledged web application using container and serving it as a website. Docker is containerization tool using which you will run containers with your custom images.</p>
</div>
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-2/3 p-4">
    <Image src={docker} alt="Image 3" className="w-full h-auto " style={{height:"220px",objectFit:'cover',borderRadius:'12px',minWidth:'300px'}} />
  </div></div>


  <div className="shadow-xl flex flex-col lg:flex-row justify-between mt-20  relative p-5 py-2 rounded-lg" >
<span className='absolute top-0 left-[-10px] flex justify-center font-bold items-center text-white shadow-lg rounded-full h-10 w-10' style={{background:'blue'}}>6</span>
<div className='flex flex-col py-10 '>
    <h1 className='font-bold text-3xl text-left font-sans' style={{color:'blue'}}> Kubernetes</h1>
    <p className='py-5 px-0 w-[90%] text-left font-sans'>In this module you will learn Kubernetes as Orchestration tool. Topics covered are Kubernetes Architectur e, Namespaces, Pods, Replicasets, Deployments, Services, PV, PVC, Daemonset, Statefulset. You will be able to deploy a complete HA webs ite after Kubernetes.</p>
</div>
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-2/3 p-4">
    <Image src={kub} alt="Image 3" className="w-full h-auto " style={{height:"220px",objectFit:'cover',borderRadius:'12px',minWidth:'300px'}} />
  </div></div>



  <div className="shadow-xl flex flex-col lg:flex-row justify-between mt-20  relative p-5 py-2 rounded-lg" >
<span className='absolute top-0 left-[-10px] flex justify-center font-bold items-center text-white shadow-lg rounded-full h-10 w-10' style={{background:'blue'}}>7</span>
<div className='flex flex-col py-10 '>
    <h1 className='font-bold text-3xl text-left font-sans' style={{color:'blue'}}> Jenkins</h1>
    <p className='py-5 px-0 w-[90%] text-left font-sans'>In this module you will learn to create CI/CD pipelines and perform the automation of a full fledged application development life cycle. You will be integrating the different tools learnt earlier (Linux, GitHub, AWS, Terraform, Docker, Kubernetes) to perform the automation of software development.
</p>
</div>
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-2/3 p-4">
    <Image src={jen} alt="Image 3" className="w-full h-auto " style={{height:"220px",objectFit:'cover',borderRadius:'12px',minWidth:'300px'}} />
  </div></div>
   

  <div className="shadow-xl flex flex-col lg:flex-row justify-between mt-20  relative p-5 py-2 rounded-lg" >
<span className='absolute top-0 left-[-10px] flex justify-center font-bold items-center text-white shadow-lg rounded-full h-10 w-10' style={{background:'blue'}}>8</span>
<div className='flex flex-col py-10 '>
    <h1 className='font-bold text-3xl text-left font-sans' style={{color:'blue'}}> Grafana and Prometheus</h1>
    <p className='py-5 px-0 w-[90%] text-left font-sans'>In this module you will learn to develop a monitoring environment in which you will be monito ring servers, docker containers and kubenetes resources. Grafana is the centralized interface while prometheus is required in every reso urce to send metrics to the Grafana server.
</p>
</div>
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-2/3 p-4">
    <Image src={poth} alt="Image 3" className="w-full h-auto " style={{height:"220px",objectFit:'cover',borderRadius:'12px',minWidth:'300px'}} />
  </div></div>



  <div className="shadow-xl flex flex-col lg:flex-row justify-between mt-20  relative p-5 py-2 rounded-lg" >
<span className='absolute top-0 left-[-10px] flex justify-center font-bold items-center text-white shadow-lg rounded-full h-10 w-10' style={{background:'blue'}}>9</span>
<div className='flex flex-col py-10 '>
    <h1 className='font-bold text-3xl text-left font-sans' style={{color:'blue'}}> Ansible</h1>
    <p className='py-5 px-0 w-[90%] text-left font-sans'>Ansible is configuration management tool and you will laern to perform patching and configuring different ap plications remotely from the ansible server to the target servers.
</p>
</div>
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-2/3 p-4">
    <Image src={ansible} alt="Image 3" className="w-full h-auto " style={{height:"220px",objectFit:'cover',borderRadius:'12px',minWidth:'300px'}} />
  </div></div>


  <div className="shadow-xl flex flex-col lg:flex-row justify-between mt-20  relative p-5 py-2 rounded-lg" >
<span className='absolute top-0 left-[-10px] flex justify-center font-bold items-center text-white shadow-lg rounded-full h-10 w-10' style={{background:'blue'}}>10</span>
<div className='flex flex-col py-10 '>
    <h1 className='font-bold text-3xl text-left font-sans' style={{color:'blue'}}> Python Programming</h1>
    <p className='py-5 px-0 w-[90%] text-left font-sans'>In this module you will learn basic programming using Python as knowing one of the programming language is an added skill to perform better as DevOps Engineer. You will learn upto OOP using Python.
</p>
</div>
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-2/3 p-4">
    <Image src={py} alt="Image 3" className="w-full h-auto " style={{height:"220px",objectFit:'cover',borderRadius:'12px',minWidth:'300px'}} />
  </div></div>


    </section>
    </div>




  )
}
