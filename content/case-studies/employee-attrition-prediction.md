---
title: 'Predicting Employee Attrition: Analysis and Recommendations'
date: '2024-04-25'
image: '/case_studies_pics/HR_CaseStudy.jpg'
description: 'A detailed case study on predicting employee attrition, identifying key factors, and providing actionable recommendations to enhance employee retention.'
slug: 'employee-attrition-prediction'
---

# Predicting Employee Attrition: Analysis and Recommendations

Employee attrition poses significant challenges to organizations, affecting productivity, morale, and financial performance. High turnover rates can escalate recruitment costs, deplete institutional knowledge, and disrupt workflows. This case study explores the dynamics of employee attrition within an organization, identifying key contributing factors, and offer strategic recommendations to enhance employee retention.

The dataset provided by IBM encompasses data from three distinct departments, offering a comprehensive view of employee behavior, satisfaction, and organizational dynamics.

## **Business Use Cases**

This analysis addresses three primary business objectives:

1. **Predicting Individual Employee Attrition:** Developing a model to identify employees at risk of leaving, enabling proactive intervention.
2. **Depicting Important Factors for Employee Departure:** Understanding the primary reasons behind employee turnover to address underlying issues.
3. **Improving Employee Retention:** Crafting data-driven recommendations to enhance satisfaction and reduce attrition rates.

## **Framing the Key Questions**

To navigate the complexities of employee attrition, the following key questions guide our analysis:

### **Attrition Analysis**

- **What percentage of employees leave the company (overall attrition rate)?**
- **Are there patterns in who leaves (e.g., age, gender, job role, department)?**

### **Satisfaction and Attrition**

- **How do satisfaction levels (job, environment, relationship) differ between employees who leave vs. those who stay?**
- **Is there a relationship between work-life balance and attrition?**

### **Workplace and Compensation**

- **Are employees who leave paid significantly less than those who stay?**
- **Does overtime or business travel correlate with higher attrition?**

### **Career Progression**

- **Do employees who leave have fewer years in their current role, fewer promotions, or less training?**

### **Demographics and Attrition**

- **Does age, marital status, or education level influence attrition?**

### **Predictive Insights**

- **Can we predict which employees are likely to leave based on their attributes?**

## **Attrition Analysis**

### **Overall Attrition Rate**

Our analysis reveals that **16.1%** of employees are leaving their positions, while **83.9%** are staying. This overall attrition rate serves as a baseline for understanding the turnover landscape within the organization.

![Overall Attrition Rate](/case_studies_pics/hr_case_study_graphs/overall_attrition.png)

<details>
  <summary class="text-indigo-600 cursor-pointer">View Code</summary>
  <pre class="bg-gray-800 text-gray-200 p-4 rounded-lg">
    <code>
    <!-- Add your Python code here -->
    </code>
  </pre>
</details>

### **Attrition by Age**

Age is a significant factor influencing employee turnover. Employees in their early 20s exhibit the highest attrition rates, nearing **50%**. As age increases, the likelihood of leaving diminishes sharply, stabilizing between **10-20%** for those in their mid-20s to 30s, and dropping below **10%** for employees aged **50 and above**.

![Attrition By Age](/case_studies_pics/hr_case_study_graphs/attrition_age.png)

<details>
  <summary class="text-indigo-600 cursor-pointer">View Code</summary>
  <pre class="bg-gray-800 text-gray-200 p-4 rounded-lg">
    <code>
    <!-- Add your Python code here -->
    </code>
  </pre>
</details>

### **Attrition by Gender**

Attrition rates between males and females are relatively comparable, ranging between **15-20%**. This parity suggests that gender is not a primary driver of employee turnover within the organization.

![Attrition By Gender](/case_studies_pics/hr_case_study_graphs/attrition_gender.png)

<details>
  <summary class="text-indigo-600 cursor-pointer">View Code</summary>
  <pre class="bg-gray-800 text-gray-200 p-4 rounded-lg">
    <code>
    <!-- Add your Python code here -->
    </code>
  </pre>
</details>

### **Attrition by Job Role**

Different job roles exhibit varying attrition trends. **Sales Representatives** lead with the highest attrition rate at nearly **40%**, followed by **Healthcare Representatives** at around **20%**. In contrast, positions such as **Managers**, **Research Directors**, and **Manufacturing Directors** showcase the lowest turnover rates, all below **10%**.

![Attrition by Job Role](/case_studies_pics/hr_case_study_graphs/attrition_role.png)

<details>
  <summary class="text-indigo-600 cursor-pointer">View Code</summary>
  <pre class="bg-gray-800 text-gray-200 p-4 rounded-lg">
    <code>
    <!-- Add your Python code here -->
    </code>
  </pre>
</details>

### **Attrition by Department**

Departmental analysis reveals that the **Human Resources** and **Sales** departments share the highest attrition rates at approximately **20%**, whereas **Research & Development** maintains a notably lower rate of around **10%**.

![Attrition by Department](/case_studies_pics/hr_case_study_graphs/attrition_department.png)

<details>
  <summary class="text-indigo-600 cursor-pointer">View Code</summary>
  <pre class="bg-gray-800 text-gray-200 p-4 rounded-lg">
    <code>
    <!-- Add your Python code here -->
    </code>
  </pre>
</details>

## **Monthly Income Distribution by Attrition Status**

### **Key Observations**

The distribution of monthly income provides deeper insights into attrition trends:

- **Overall Income Distribution:**

  - A majority of employees, regardless of their attrition status, earn between **2,500 to 5,000** monthly.
  - There's a noticeable skew towards lower-income brackets, with fewer employees earning above **10,000**.

- **Employees Staying:**

  - The **2,500 to 5,000** income range holds the highest frequency.
  - As income increases, the number of employees choosing to stay decreases steadily.
  - Employees earning above **10,000** show a lower propensity to leave, indicating that higher compensation correlates with increased retention.

- **Employees Leaving:**
  - A higher concentration exists in the **2,500 to 5,000** income bracket.
  - The likelihood of leaving diminishes sharply with rising income, with minimal turnover among those earning above **10,000**.
  - This trend underscores a strong negative correlation between income and attrition.

![Monthly Income Distribution](/case_studies_pics/hr_case_study_graphs/attrition_income.png)

<details>
  <summary class="text-indigo-600 cursor-pointer">View Code</summary>
  <pre class="bg-gray-800 text-gray-200 p-4 rounded-lg">
    <code>
    <!-- Add your Python code here -->
    </code>
  </pre>
</details>

## **Career Progression**

### **Years in Current Role**

Analyzing tenure reveals a clear distinction between those who stay and those who depart:

- **Employees Leaving:** On average, have **2.65 years** in their current role.
- **Employees Staying:** Boast a longer tenure, averaging **4.48 years**.

This disparity suggests that shorter tenure correlates with higher attrition rates.

![Years in Current Role](/case_studies_pics/hr_case_study_graphs/career_progress.png)

<details>
  <summary class="text-indigo-600 cursor-pointer">View Code</summary>
  <pre class="bg-gray-800 text-gray-200 p-4 rounded-lg">
    <code>
    <!-- Add your Python code here -->
    </code>
  </pre>
</details>

### **Number of Promotions**

Promotion frequency offers additional perspective:

- **Employees Leaving:** Average of **2.62 promotions**.
- **Employees Staying:** Slightly higher at **2.90 promotions**.

While the difference is modest, it hints that career progression opportunities may influence retention.

<details>
  <summary class="text-indigo-600 cursor-pointer">View Code</summary>
  <pre class="bg-gray-800 text-gray-200 p-4 rounded-lg">
    <code>
    <!-- Add your Python code here -->
    </code>
  </pre>
</details>

### **Training Times Last Year**

Training engagement presents a subtle yet notable trend:

- **Employees Leaving:** Averaged **2.83 training sessions** last year.
- **Employees Staying:** Slightly more at **2.94 training sessions**.

The minimal variance suggests that while training is consistent, it may not be the primary driver of attrition.

![Training Times Last Year](/case_studies_pics/hr_case_study_graphs/career_progress.png)

<details>
  <summary class="text-indigo-600 cursor-pointer">View Code</summary>
  <pre class="bg-gray-800 text-gray-200 p-4 rounded-lg">
    <code>
    <!-- Add your Python code here -->
    </code>
  </pre>
</details>

## **Demographics and Attrition**

### **Attrition by Average Age**

Age dynamics play a pivotal role in employee retention:

- **Employees Staying:** Average age of **37.6 years**.
- **Employees Leaving:** Younger average age at **33.6 years**.

This indicates that younger employees are more susceptible to leaving the organization.

![Attrition by Average Age](/case_studies_pics/hr_case_study_graphs/average_age.png)

<details>
  <summary class="text-indigo-600 cursor-pointer">View Code</summary>
  <pre class="bg-gray-800 text-gray-200 p-4 rounded-lg">
    <code>
    <!-- Add your Python code here -->
    </code>
  </pre>
</details>

### **Attrition by Education Level**

Educational attainment offers a nuanced view:

- **Employees Staying:** Average education level of **2.93**.
- **Employees Leaving:** Slightly lower at **2.84**.

This marginal difference suggests that education level has a limited impact on attrition rates.

![Attrition by Education Level](/case_studies_pics/hr_case_study_graphs/education_level.png)

<details>
  <summary class="text-indigo-600 cursor-pointer">View Code</summary>
  <pre class="bg-gray-800 text-gray-200 p-4 rounded-lg">
    <code>
    <!-- Add your Python code here -->
    </code>
  </pre>
</details>

### **Attrition by Marital Status**

Marital status emerges as a significant determinant:

- **Employees Staying:**

  - **Divorced:** **35%**
  - **Married:** **55%**
  - **Single:** **10%**

- **Employees Leaving:**
  - **Divorced:** **65%**
  - **Married:** **45%**
  - **Single:** **90%**

The stark contrast, especially among single employees, underscores the influence of personal circumstances on employment decisions.

![Attrition by Marital Status](/case_studies_pics/hr_case_study_graphs/martial_status.png)

<details>
  <summary class="text-indigo-600 cursor-pointer">View Code</summary>
  <pre class="bg-gray-800 text-gray-200 p-4 rounded-lg">
    <code>
    <!-- Add your Python code here -->
    </code>
  </pre>
</details>

## **Unique Insights**

Through meticulous analysis, several key insights have surfaced:

1. **Younger Employees Have Higher Attrition Rates:**

   - Employees in their early 20s exhibit attrition rates nearing **50%**, a stark contrast to their older counterparts.
   - Attrition stabilizes post-mid-20s, dropping below **10%** for those aged **50 and above**.

2. **Compensation is a Critical Factor:**

   - Employees earning below **5,000** monthly are most likely to leave.
   - Higher income brackets correlate with reduced attrition, highlighting the importance of competitive compensation.

3. **Sales and HR Roles are High-Risk:**

   - **Sales Representatives** face a **40%** attrition rate.
   - **HR Department** employees also exhibit elevated turnover at around **20%**.
   - These roles may require targeted retention strategies.

4. **Short Tenure and Limited Career Progression Correlate with Attrition:**

   - Employees with fewer than **3 years** in their current role and less than **3 promotions** are more inclined to depart.
   - This suggests that opportunities for advancement play a role in retention.

5. **Single Employees are at Higher Risk:**

   - An overwhelming **90%** of employees leaving are single, compared to **10%** who are married or divorced.
   - Marital commitments may provide additional stability and reduce turnover likelihood.

6. **Training Opportunities Matter:**

   - Employees receiving fewer than **3 training sessions** annually show a higher propensity to leave.
   - Continuous professional development is essential for employee satisfaction and retention.

7. **Job Satisfaction Plays a Role:**
   - Employees departing report lower job satisfaction compared to those who remain.
   - Enhancing job satisfaction can be a pivotal strategy in reducing attrition.

## **Recommendations for HR Teams**

Drawing from the insights gathered, the following strategic recommendations are proposed to mitigate employee attrition:

### **1. Enhance Retention Strategies for Younger Employees**

- **Flexible Career Pathways:**

  - Implement structured career development plans tailored for younger employees to provide clear growth trajectories within the organization.

- **Mentorship Programs:**
  - Establish mentorship initiatives pairing younger employees with seasoned professionals to offer guidance, foster connections, and cultivate organizational loyalty.

### **2. Address Compensation Gaps**

- **Salary Adjustments:**

  - Conduct regular salary reviews to ensure competitiveness, especially for roles with high attrition rates like Sales.

- **Performance-Based Bonuses:**
  - Introduce bonus structures linked to performance and tenure to incentivize sustained employment.

### **3. Focus on High-Risk Departments and Roles**

- **Targeted Retention Initiatives:**

  - Prioritize retention efforts in departments like Sales and HR by addressing specific challenges such as workload management and job satisfaction.

- **Workload Balancing:**
  - Assess and redistribute workloads to prevent burnout and reduce turnover in high-stress roles.

### **4. Promote Career Growth**

- **Internal Promotions:**

  - Foster a culture of internal mobility by providing ample promotion opportunities for deserving employees, thereby enhancing job satisfaction and loyalty.

- **Skill Development Programs:**
  - Expand access to training and professional development resources to empower employees and support their career aspirations.

### **5. Strengthen Employee Engagement**

- **Job Satisfaction Surveys:**

  - Implement regular surveys to gauge employee satisfaction, identify areas of concern, and address issues proactively before they lead to attrition.

- **Recognition Programs:**
  - Develop formal recognition systems to celebrate employee achievements and milestones, reinforcing their value within the organization.

### **6. Provide Targeted Training Opportunities**

- **Custom Training Plans:**

  - Design personalized training programs for employees with fewer than **3 training sessions** annually, aligning with their career goals and organizational needs.

- **Leadership Training:**
  - Offer leadership development initiatives to prepare high-potential employees for future managerial roles, fostering a pipeline of capable leaders.

### **7. Retain Single Employees**

- **Social Engagement Programs:**

  - Create community-building activities and team-building events to foster a sense of belonging among single employees.

- **Work-Life Integration:**
  - Provide flexible work arrangements to help single employees achieve a balanced and fulfilling personal and professional life.

### **8. Improve Employee Experience**

- **Transparent Communication:**

  - Maintain open lines of communication regarding career opportunities, company objectives, and role expectations to build trust and engagement.

- **Exit Interviews:**
  - Conduct comprehensive exit interviews with departing employees to uncover root causes of attrition and implement corrective measures based on recurring themes.

## **Python Code for Visualizing the Graphs**

You can view and interact with the Python code used to generate the graphs [here](https://colab.research.google.com/drive/1PHqtwj6pcz5mYsKAtBTeI6Lb80GY4YA3#scrollTo=0NdiJSson-Rr).

You can view the dataset used for the analysis [here](https://drive.google.com/file/d/1ixDJhG_Ghip_TBPloG_wLaBdto0mlsEs/view).
