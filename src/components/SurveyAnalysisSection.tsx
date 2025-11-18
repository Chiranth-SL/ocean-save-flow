import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Droplets, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";

const SurveyAnalysisSection = () => {
  const surveyData = [
    { id: "Survey 1", totalConsumption: 794 },
    { id: "Survey 2", totalConsumption: 961.25 },
    { id: "Survey 3", totalConsumption: 894 },
  ];

  const averageConsumption = (surveyData.reduce((sum, survey) => sum + survey.totalConsumption, 0) / surveyData.length).toFixed(2);

  const keyFindings = [
    {
      title: "High Shower Water Usage",
      description: "Long showers (>15 minutes) contribute significantly to daily water consumption, averaging 300-400 LPD per household.",
      icon: AlertCircle,
      type: "concern"
    },
    {
      title: "Lawn Watering Impact",
      description: "Garden watering shows high consumption (281-375 LPD), suggesting potential for rainwater harvesting systems.",
      icon: TrendingUp,
      type: "opportunity"
    },
    {
      title: "Efficient Practices Observed",
      description: "Manual dishwashing and bucket-based car washing demonstrate water-conscious behavior by households.",
      icon: CheckCircle,
      type: "positive"
    },
    {
      title: "Leakage Detection",
      description: "Reported leaky pipes indicate potential for additional water savings through maintenance and repairs.",
      icon: AlertCircle,
      type: "concern"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Household Water Usage Analysis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world survey data reveals consumption patterns and opportunities for conservation
          </p>
        </div>

        {/* Average Consumption Card */}
        <Card className="mb-12 bg-card/80 backdrop-blur-sm border-primary/20 shadow-soft">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Droplets className="w-12 h-12 text-primary" />
            </div>
            <CardTitle className="text-3xl">Average Daily Water Consumption</CardTitle>
            <CardDescription>Based on three household surveys</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-2">{averageConsumption}</div>
              <div className="text-xl text-muted-foreground">Liters Per Day (LPD)</div>
            </div>
          </CardContent>
        </Card>

        {/* Survey Data Table */}
        <Card className="mb-12 bg-card/80 backdrop-blur-sm border-primary/20 shadow-soft overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl">Survey Summary</CardTitle>
            <CardDescription>Total daily water consumption across surveyed households</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Household</TableHead>
                  <TableHead className="text-right">Total Consumption (LPD)</TableHead>
                  <TableHead className="text-right">Variance from Average</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {surveyData.map((survey) => {
                  const variance = ((survey.totalConsumption - parseFloat(averageConsumption)) / parseFloat(averageConsumption) * 100).toFixed(1);
                  return (
                    <TableRow key={survey.id}>
                      <TableCell className="font-medium">{survey.id}</TableCell>
                      <TableCell className="text-right font-semibold">{survey.totalConsumption}</TableCell>
                      <TableCell className={`text-right ${parseFloat(variance) > 0 ? 'text-orange-500' : 'text-green-500'}`}>
                        {parseFloat(variance) > 0 ? '+' : ''}{variance}%
                      </TableCell>
                    </TableRow>
                  );
                })}
                <TableRow className="bg-muted/50 font-bold">
                  <TableCell>Average</TableCell>
                  <TableCell className="text-right">{averageConsumption}</TableCell>
                  <TableCell className="text-right">—</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Key Findings */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Key Findings & Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyFindings.map((finding, index) => {
              const Icon = finding.icon;
              return (
                <Card 
                  key={index}
                  className={`bg-card/80 backdrop-blur-sm border-primary/20 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 ${
                    finding.type === 'concern' ? 'border-l-4 border-l-orange-500' :
                    finding.type === 'opportunity' ? 'border-l-4 border-l-blue-500' :
                    'border-l-4 border-l-green-500'
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Icon className={`w-8 h-8 ${
                        finding.type === 'concern' ? 'text-orange-500' :
                        finding.type === 'opportunity' ? 'text-blue-500' :
                        'text-green-500'
                      }`} />
                      <div>
                        <CardTitle className="text-xl mb-2">{finding.title}</CardTitle>
                        <CardDescription className="text-base">{finding.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recommendations */}
        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border-primary/30 shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Reduce shower time to under 10 minutes to save approximately 200-300 LPD per household</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Install rainwater harvesting systems to offset lawn and garden watering needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Fix leaky pipes and faucets immediately - even small drips can waste 20+ liters per day</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Consider water-efficient appliances and fixtures to reduce consumption by 20-30%</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Adopt native plants in gardens that require less watering and maintenance</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SurveyAnalysisSection;
