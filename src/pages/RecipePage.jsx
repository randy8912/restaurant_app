import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  VStack,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";

// RecipePage component to display recipe details
const RecipePage = ({ recipe, goBack }) => (
  <Box p="4" bg="blue.100" minH="100vh">
    {/* Back button to return to the previous page */}
    <Button onClick={goBack} mb="4" colorScheme="blue">
      Back
    </Button>
    <SimpleGrid columns={[1, 2]} spacing={6}>
      <Box>
        {/* Display recipe image */}
        <Image src={recipe.image} alt={recipe.label} borderRadius="lg" />
      </Box>
      <VStack align="start" spacing={4}>
        <Heading>{recipe.label}</Heading>
        <Text fontSize="lg">
          <strong>Meal Type:</strong> {recipe.mealType?.join(", ")}
        </Text>
        <Text fontSize="lg">
          <strong>Dish Type:</strong> {recipe.dishType?.join(", ")}
        </Text>
        <Text fontSize="lg">
          <strong>Total Cooking Time:</strong> {recipe.totalTime} mins
        </Text>
        <Text fontSize="lg">
          <strong>Servings:</strong> {recipe.yield}
        </Text>
        <Heading size="md" mt="4">
          Ingredients
        </Heading>
        <ul>
          {/* List of ingredients */}
          {recipe.ingredientLines.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
        <Heading size="md" mt="4">
          Health Labels
        </Heading>
        <Box>
          {/* Display health labels */}
          {recipe.healthLabels?.map((label) => (
            <Badge key={label} colorScheme="green" mr="1" mb="1">
              {label}
            </Badge>
          ))}
        </Box>
        <Heading size="md" mt="4">
          Cautions
        </Heading>
        <Box>
          {/* Display cautions */}
          {recipe.cautions?.map((caution) => (
            <Badge key={caution} colorScheme="red" mr="1">
              {caution}
            </Badge>
          ))}
        </Box>
      </VStack>
    </SimpleGrid>
  </Box>
);

export default RecipePage;
