---
title: 'Predicting Employee Attrition: Analysis and Recommendations'
date: '2024-04-25'
image: '/case_studies_pics/HR_CaseStudy.jpg'
description: 'A detailed case study on predicting employee attrition using machine learning techniques, identifying key factors, and providing actionable recommendations to enhance employee retention.'
slug: 'employee-attrition-prediction'
---

Employee attrition, the process by which employees leave an organization, poses significant challenges to businesses, impacting productivity, morale, and financial performance. High attrition rates can lead to increased recruitment costs, loss of institutional knowledge, and disruptions in workflow. This case study aims to predict employee attrition within an organization, identify the key factors contributing to turnover, and provide actionable recommendations to enhance employee retention.

This data is provided by IBM spanning 3 different departments.

## **Business Use Cases**

1. **Predicting Individual Employee Attrition:** Develop a model to identify employees at risk of leaving.
2. **Depicting Important Factors for Employee Departure:** Determine the primary reasons why employees choose to leave.
3. **Improving Employee Retention:** Offer strategic recommendations based on data-driven insights.

## **Framing the Key Questions**

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

The analysis revealed that **16.1%** of employees in the dataset are leaving their positions, while **83.9%** of employees are staying.

![Overall Attrition Rate](/case_studies_pics/hr_case_study_graphs/overall_attrition.png)

<details
  <summary class="text-indigo-600 cursor-pointer">View Code</summary>
  <pre class="bg-gray-800 text-gray-200 p-4 rounded-lg">
    <code>

  </code>
  </pre>
</details>

### **Attrition by Age**

- **Early 20s:** Highest attrition rate, nearing **50%**.
- **Mid 20s to 30s:** Attrition rate decreases sharply, stabilizing around **10-20%**.
- **50 and Above:** Lowest attrition rates.

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

The percentages of employees leaving are similar for both males and females, ranging between **15-20%**.

![Attrition By Geneder](/case_studies_pics/hr_case_study_graphs/attrition_gender.png)

<details>
  <summary class="text-indigo-600 cursor-pointer">View Code</summary>
  <pre class="bg-gray-800 text-gray-200 p-4 rounded-lg">
    <code>
    <!-- Add your Python code here -->
    </code>
  </pre>
</details>

### **Attrition by Job Role**

- **Sales Representatives:** Highest attrition rate at nearly **40%**.
- **Healthcare Representatives:** Relatively high attrition rate around **20%**.
- **Managers, Research Directors, Manufacturing Directors:** Lowest attrition rates, all below **10%**.

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

- **Human Resources:** Highest percentage of employees leaving, around **20%**.
- **Research & Development:** Lowest percentage of employees leaving, approximately **10%**.
- **Sales:** Similar to Human Resources, around **20%**.

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

- **Overall Income Distribution:**

  - Most employees, regardless of attrition status, have monthly incomes concentrated in the lower income brackets (e.g., **2,500 to 5,000**).
  - Clear skew towards lower-income employees, with fewer employees earning above **10,000**.

- **Employees Staying:**

  - Highest frequency in the **2,500 to 5,000** income range.
  - As income increases, the frequency of employees staying decreases steadily.
  - Employees earning above **10,000** show a lower likelihood of leaving, suggesting higher-paid employees tend to stay.

- **Employees Leaving:**
  - More concentrated in the **2,500 to 5,000** income range compared to higher income brackets.
  - Proportion of employees leaving decreases sharply as income rises, with very few employees leaving when earning above **10,000**.
  - Strong negative correlation between income and attrition.

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

- **Employees Leaving:** Average of **2.65 years**.
- **Employees Staying:** Average of **4.48 years**.
- Indicates that employees staying tend to have more years in their current roles compared to those leaving.

<details>
  <summary class="text-indigo-600 cursor-pointer">View Code</summary>
  <pre class="bg-gray-800 text-gray-200 p-4 rounded-lg">
    <code>
    <!-- Add your Python code here -->
    </code>
  </pre>
</details>

### **Number of Promotions**

- **Employees Leaving:** Average of **2.62 promotions**.
- **Employees Staying:** Average of **2.90 promotions**.
- Slight difference in the average number of promotions between employees leaving and those staying.

<details>
  <summary class="text-indigo-600 cursor-pointer">View Code</summary>
  <pre class="bg-gray-800 text-gray-200 p-4 rounded-lg">
    <code>
    <!-- Add your Python code here -->
    </code>
  </pre>
</details>

### **Training Times Last Year**

- **Employees Leaving:** Average of **2.83 training sessions**.
- **Employees Staying:** Average of **2.94 training sessions**.
- Minimal difference between the two groups in training frequency.

![Attrition by Career Progression](/case_studies_pics/hr_case_study_graphs/career_progress.png)

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

- **Employees Staying:** Average age of **37.6 years**.
- **Employees Leaving:** Average age of **33.6 years**.
- Indicates that employees who leave tend to be younger on average compared to those who stay.

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

- **Employees Staying:** Average education level of **2.93**.
- **Employees Leaving:** Average education level of **2.84**.
- Slight difference in education levels between employees who stay and those who leave.

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

- **Employees Staying:**

  - **Divorced:** **35%**
  - **Married:** **55%**
  - **Single:** **10%**

- **Employees Leaving:**
  - **Divorced:** **65%**
  - **Married:** **45%**
  - **Single:** **90%**

Significant differences in marital status proportions between employees who leave and those who stay.

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

1. **Younger Employees Have Higher Attrition Rates:**

   - Employees in their early 20s have an attrition rate nearing **50%**, significantly higher than other age groups.
   - Attrition stabilizes after the mid-20s and drops below **10%** for employees aged **50+**.

2. **Compensation is a Critical Factor:**

   - Employees earning less than **5,000** show the highest likelihood of leaving.
   - Attrition decreases sharply as income increases, with very few employees earning over **10,000** leaving the organization.
   - Suggests that compensation plays a significant role in attrition rates.

3. **Sales and HR Roles are High-Risk:**

   - **Sales Representatives:** **40%** attrition rate.
   - **HR Department:** Attrition rates close to **20%**.
   - Indicates these areas face significant challenges in retaining employees.

4. **Short Tenure and Limited Career Progression Correlate with Attrition:**

   - Employees with fewer than **3 years** in their current role and less than **3 promotions** are more likely to leave.
   - Lack of career progression opportunities appears to be a key driver.

5. **Single Employees are at Higher Risk:**

   - **90%** of employees leaving are single, compared to **10%** who are married or divorced.
   - Marital commitments may contribute to higher stability.

6. **Training Opportunities Matter:**

   - Employees who receive fewer than **3 training sessions** per year are more likely to leave.
   - Indicates a link between training and employee retention.

7. **Job Satisfaction Plays a Role:**
   - Employees leaving report lower job satisfaction compared to those staying.
   - Suggests that dissatisfaction in the work environment or role may be a factor in attrition.

## **Recommendations for HR Teams**

### **1. Enhance Retention Strategies for Younger Employees**

- **Flexible Career Pathways:**

  - Offer structured career development plans for younger employees to provide clarity on potential growth within the company.

- **Mentorship Programs:**
  - Pair younger employees with senior mentors to provide guidance, reduce uncertainty, and build stronger organizational ties.

### **2. Address Compensation Gaps**

- **Salary Adjustments:**

  - Review and adjust salaries for employees earning less than **5,000** to align with market standards, particularly in high-risk roles like Sales.

- **Performance-Based Bonuses:**
  - Introduce bonus structures tied to performance and tenure to incentivize longer stays.

### **3. Focus on High-Risk Departments and Roles**

- **Targeted Retention Initiatives:**

  - Prioritize retention programs for Sales Representatives and the HR department by addressing role-specific challenges (e.g., workload or job satisfaction).

- **Workload Balancing:**
  - Conduct workload assessments in high-attrition departments to identify and address potential stressors.

### **4. Promote Career Growth**

- **Internal Promotions:**

  - Ensure consistent promotion opportunities for employees with proven performance, particularly those with limited prior promotions.

- **Skill Development Programs:**
  - Increase access to professional development and certification programs to enhance career mobility within the organization.

### **5. Strengthen Employee Engagement**

- **Job Satisfaction Surveys:**

  - Conduct regular employee satisfaction surveys to identify and address dissatisfaction before it leads to attrition.

- **Recognition Programs:**
  - Implement formal recognition systems to celebrate employee contributions and milestones.

### **6. Provide Targeted Training Opportunities**

- **Custom Training Plans:**

  - Design individualized training programs for employees receiving fewer than **3 training sessions** per year, tailored to their career goals.

- **Leadership Training:**
  - Offer leadership training to high-potential employees to prepare them for future roles.

### **7. Retain Single Employees**

- **Social Engagement Programs:**

  - Foster a sense of community for single employees through team-building events and activities.

- **Work-Life Integration:**
  - Offer flexible work arrangements to help single employees achieve a better work-life balance.

### **8. Improve Employee Experience**

- **Transparent Communication:**

  - Regularly communicate career opportunities, company goals, and role expectations to build trust and engagement.

- **Exit Interviews:**
  - Conduct detailed exit interviews with departing employees to identify root causes of attrition and address recurring themes.

## **Python Code for Visualizing the Graphs**

You can view and interact with the Python code used to generate the graphs [here](https://colab.research.google.com/drive/1PHqtwj6pcz5mYsKAtBTeI6Lb80GY4YA3#scrollTo=0NdiJSson-Rr).
