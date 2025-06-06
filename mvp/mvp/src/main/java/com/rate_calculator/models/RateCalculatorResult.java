package com.rate_calculator.models;
public class RateCalculatorResult {

    private double recommendedDailyRate;
    private double recommendedMonthlyRate;
    private double minimumYearlySalary;
    private double monthlyBreakdown;


    public RateCalculatorResult(double recommendedDailyRate, double recommendedMonthlyRate,
                                double minimumYearlySalary, double monthlyBreakdown){
                this.recommendedDailyRate = recommendedDailyRate;
                this.recommendedMonthlyRate = recommendedMonthlyRate;
                this.minimumYearlySalary = minimumYearlySalary;
                this.monthlyBreakdown = monthlyBreakdown;
    
     }
    
    public double getRecommendedDailyRate(){
        return recommendedDailyRate;
}

    public void setRecommendedDailyRate(double recommendedDailyRate){
        this.recommendedDailyRate = recommendedDailyRate;
    }

    public double getRecommendedMonthlyRate(){
        return recommendedMonthlyRate;
    }

    public void setRecommendedMonthlyRate(double recommendedMonthlyRate){
        this.recommendedMonthlyRate = recommendedMonthlyRate;
    }

    public double getMinimunYearlySalary(){
        return minimumYearlySalary;
    }

    public void setMinimumYearlySalary(double minimumYearlySalary){
        this.minimumYearlySalary = minimumYearlySalary;
    }

    public double getMonthlyBreakdown(){
        return monthlyBreakdown;
    }

    public void setMonthlyBreakdown(double monthlyBreakdown){
        this.monthlyBreakdown = monthlyBreakdown;
    }
}
