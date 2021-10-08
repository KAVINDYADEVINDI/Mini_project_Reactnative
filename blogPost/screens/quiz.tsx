import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RadioButton } from "react-native-paper";

const Quiz = ({ navigation }: { navigation: any }) => {
  const [Question, setQuestion] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState("");

  const getQuiz = async () => {
    const url =
      "https://opentdb.com/api.php?amount=5&category=18&type=multiple";
    const data = await fetch(url)
      .then((res) => res.json())
      .then((json) => setQuestion(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  //handle questions for screen
  const handleQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);

    const newScore = score + 20;
    checked == "third" ? setScore(newScore) : null;

    setChecked("");
  };

  //handle score
  const handleEndButton = () => {
    console.log("final" + score);
    const newScore = score + 20;
    if (checked == "third") {
      setScore(newScore);
      navigation.navigate("Result", { paramKey: newScore });
    } else {
      navigation.navigate("Result", { paramKey: score });
    }
  };

  useEffect(() => {
    getQuiz();
  }, []);

  // console.log(score);
  console.log(Question[currentQuestion]);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      {isLoading ? (
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#a333d6",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <LinearGradient
            colors={["rgba(101, 48, 186,1)", "rgba(160, 57, 219,1)"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={styles.loading}
          > */}
          <Image source={require("../assets/kkk.gif")} style={styles.logo} />
          <Text style={styles.loadingText}>Loading...</Text>
          {/* </LinearGradient> */}
        </View>
      ) : (
        <View style={{ width: "100%", height: "100%" }}>
          <LinearGradient
            colors={["rgba(101, 48, 186,1)", "rgba(160, 57, 219,1)"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
          >
            <View style={styles.container}>
              <View style={styles.bannerContainer}>
                <Image
                  source={require("../assets/images/wel.png")}
                  style={styles.banner}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.top}>
                <Text style={styles.topText}>
                  Question {currentQuestion + 1}/5
                </Text>
              </View>

              <View style={styles.question}>
                <Text style={styles.questionText}>
                  Q.
                  {Question[currentQuestion].question.replace(
                    /&quot;/g,
                    '"',
                    /&#039;/g,
                    '"'
                  )}
                </Text>
              </View>

              <View style={styles.options}>
                <RadioButton.Group
                  onValueChange={(value) => setChecked(value)}
                  value={checked}
                >
                  <RadioButton.Item
                    style={styles.option}
                    position="leading"
                    value="first"
                    labelStyle={styles.optionText}
                    label={
                      Question[currentQuestion].incorrect_answers[0].replace(
                        /&quot;/g,
                        '"',
                        /&#039;/g,
                        "\\'"
                      )
                    }
                    status={checked === "first" ? "checked" : "unchecked"}
                  />

                  <RadioButton.Item
                    style={styles.option}
                    position="leading"
                    value="second"
                    labelStyle={styles.optionText}
                    label={Question[
                      currentQuestion
                    ].incorrect_answers[1].replace(
                      /&quot;/g,
                      '"' , 
                      /&#039;/g,
                      "\\'"
                    )}
                    status={checked === "second" ? "checked" : "unchecked"}
                  />
                  <RadioButton.Item
                    style={styles.option}
                    position="leading"
                    value="third"
                    labelStyle={styles.optionText}
                    label={Question[currentQuestion].correct_answer.replace(
                      /&quot;/g,
                      '"' , 
                      /&#039;/g,
                      "\\'"
                    )}
                    status={checked === "third" ? "checked" : "unchecked"}
                  />
                  <RadioButton.Item
                    style={styles.option}
                    position="leading"
                    value="fourth"
                    labelStyle={styles.optionText}
                    label={Question[
                      currentQuestion
                    ].incorrect_answers[2].replace(
                      /&quot;/g,
                      '"' , 
                      /&#039;/g,
                      "\\'"
                    )}
                    status={checked === "fourth" ? "checked" : "unchecked"}
                  />
                </RadioButton.Group>
              </View>

              <View>
                {currentQuestion == 4 ? (
                  <View style={styles.bottom}>
                    <TouchableOpacity onPress={handleEndButton}>
                      <LinearGradient
                        colors={["rgba(30,201,76,1)", "rgba(20,99,41,1)"]}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 0 }}
                        style={styles.button}
                      >
                        <Text style={styles.buttonText}>END</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.bottom}>
                    <TouchableOpacity
                      onPress={handleQuestion}
                      style={styles.button}
                    >
                      <LinearGradient
                        colors={["rgba(30,201,76,1)", "rgba(20,99,41,1)"]}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 0 }}
                        style={styles.button}
                      >
                        <Text style={styles.buttonText}>NEXT</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          </LinearGradient>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    padding: 12,
    width: "100%",
    height: "100%",
  },
  logo: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
  loading: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 20,
    color: "#e4e1f0",
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  top: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  topText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  question: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  questionText: {
    fontSize: 18,
  },
  options: {
    paddingHorizontal: 20,
    marginVertical: 16,
  },
  option: {
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#af46eb",
  },
  optionText: {
    fontSize: 16,
    textAlign: "left",
  },
  bottom: {
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
});
