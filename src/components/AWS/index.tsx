

const DATA = [

    {
        id:1,
        title:'UNDERSTANDING CLOUD COMPUTING',
        description:'In this module you will learn about what is cloud computing and what are the features and where AWS fits in along with AWS Regions and Availability Zones and EC2.        ',
        url:'https://www.ingenious.co.uk/wp-content/uploads/2023/08/What-is-Cloud-Computing.jpeg'
    },
    {
        id:2,
        title:'EC2 Service Features',
        description:'In this section you will learn Security Groups, Elastic IP, Custom AMI and Launch Template Instance Types and Family, Reserved and Spot Instance, User Data, Autoscaling Group.',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqWBGq0JcZApAEELQJIFYewMF7X3VGzxE6em7UrrbRJQ&s'
    },
    {
        id:3,
        title:'NETWORKING',
        description:'In this module you will learn about AWS networking topics like VPC, SUBNET, ROUTE TABLES, INTERNET GATEWAY, NAT GATEWAY PUBLIC AND PRIVATE SUBNET AND ELASTIC LOAD BALANCER.',
        url:'https://media.licdn.com/dms/image/D5612AQFL8W1goz6qrQ/article-cover_image-shrink_720_1280/0/1679967164325?e=2147483647&v=beta&t=Naqebp4UD8aom_MsjcvSgKanFddmFuu0M1M0v0tPMJ8'
    },

    {
        id:4,
        title:'AWS STORAGE ',
        description:'n this module you will learn SIMPLE STORAGE SERVICES ,,ELASTIC BLOCK STORAGE, ELASTIC FILE STORAGE, AWS BACKUP.',
        url:'https://digitalcloud.training/wp-content/uploads/2022/01/AWS-Storage.jpg'
    },

    {
        id:5,
        title:'SERVERLESS',
        description:'In this module you will learn about AWS FARGATE AWS APPSYNC, AWS LAMBDA.  What is serverless computing? | Serverless definition .  Serverless computing is a method of providing backend services on an as-used basis. Servers are still used, but a company that gets backend services from a serverless vendor is charged based on usage, not a fixed amount of bandwidth or number of servers.       ',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUVZWn6LCn-bYxgfUgjwfeJc1CcWNvs0rROvNsN-w8Aw&s'
    },
    {
        id:6,
        title:'SECURITY',
        description:'In this section you will learn AWS FIREWALL AND AWS WAF, AWS GUARDDUTY, AWS SHIELD, AWS MACIE, AWS INSPECTOR, AWS DETECTIVE, AWS KEY MANAGEMENT AND AWS CERTIFICATE MANAGER        ',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaY5WZjp8MlqMM72Pyf0frsc6FrF-MjvmfciVLxmVxkQ&s'
    },

    {
        id:7,
        title:'COMPLIANCE MANAGEMENT',
        description:'AWS ARTIFACT, AWS AUDIT MANAGER, AWS COGNITO, AND CLOUD HSM AWS SINGLE SIGN ON, AWS IDENTITY AND ACCESS MANAGEMENT AND AWS DIRECTORY MANAGEMENT.        ',
        url:'https://media.licdn.com/dms/image/C5612AQHD-BifPCuSNQ/article-cover_image-shrink_600_2000/0/1569588723913?e=2147483647&v=beta&t=ctXSzD6waU7GDoWE_birISiATTqtWlpLQeoklWJerWc'
    },

    {
        id:8,
        title:'MANAGEMENT AND GOVERNANCE',
        description:'In this module you will learn about AWS CLOUDFORMATION, AWS CLOUDTRAIL, AWS CLOUDWATCH, AWS CLI, AND AWS CONFIG AND AWS TRUSTED ADVISOR, AWS WELL ARCHITECTED FRAMEWORK, AWS ELASTIC TRANSCODER and AWS KINESIS VIDEO STREAMS.',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRke2SiktCMj6SFhz_Xf64P5129qVA0Tqo8tnnw-d6w&s'
    },

   




]

export default function AWS() {
  return (
    <div id="aws" className=" flex flex-col justify-around mt-[120px] border-t-4 pt-[70px] border-gray-100 ">
    <section className=" flex flex-col items-center justify-center text-center  ">
    <h2 className="text-4xl font-bold  mb-8 font-sans">AWS Solutions Architect Contents</h2>


{
    DATA.map(data=><div key={data.id} className="shadow-xl flex flex-col lg:flex-row justify-between mt-20  relative p-5 py-2 rounded-lg" >
    <span className='absolute top-0 left-[-10px] flex justify-center font-bold items-center text-white shadow-lg rounded-full h-10 w-10' style={{background:'blue'}}>{data.id}</span>
    <div className='flex flex-col py-10 '>
        <h1 className='font-bold text-3xl text-left font-sans' style={{color:'blue'}}> {data.title}</h1>
        <p className='py-5 px-0 w-[90%] text-left font-sans'>{data.description}</p>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-2/3 p-4">
        <img src={data.url} alt="Image 3" className="w-full h-auto shadow-md" style={{height:"220px",objectFit:'cover',borderRadius:'12px',minWidth:'300px'}} />
      </div></div>)
}





    </section>
    </div>




  )
}
