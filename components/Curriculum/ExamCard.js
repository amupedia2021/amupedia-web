import Image from 'next/image';
import styles from '@styles/scss/exam.module.scss'; // Import the SCSS file

const ExamCard = ({ data }) => {
 

  return (
    <>
    <div className={styles.material}>
      {/* Place the image div after the table div to ensure it comes on top */}
      <div className={styles.imageDiv}>
        <Image
          loading="lazy"
          src={`${data.icon}`}
          width={464}
          height={464}
          layout="responsive"
          alt="Exam Icon"
        />
      </div>
      <div className="ml-9 mb-8">
        <table
          className="border-collapse rounded-lg overflow-hidden w-120 "
          style={{       fontSize: '16px', lineHeight: '1.6', background: '#f5f5f5' }}
        >
          <tbody>
            {data.examDetails.map((detail, index) => (
              <tr
                key={index}
                className="hover:bg-yellow-200 transition-all duration-200"
              >
                <td
                  style={{ width: '300px' }}
                  className="p-2 border border-black"
                >
                  <p className="text-purple-700 font-bold">{detail.title}</p>
                </td>
                <td
                  style={{ width: '301px' }}
                  className="p-2 border border-black"
                >
                  <p className="text-blue-700">{detail.detail}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
    </div>
  </>
);
};

export default ExamCard;