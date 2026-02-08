const configAbility = {
  "fileName": "8033011_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__769637727\">Enemy_W1_Mecha03_02_RLElite_ReFreshMark</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1792031086\">Enemy_W1_Mecha03_02_RLElite_CountingSoldier02</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "SoldierCount02",
              "value": -1,
              "max": 2
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "SoldierCount02",
              "value": 1,
              "max": 2
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "isRefreshFlag",
        "SoldierCount02",
        "SoldierCount01"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1775253467\">Enemy_W1_Mecha03_02_RLElite_CountingSoldier01</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "SoldierCount01",
              "value": -1,
              "max": 2
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variableName": "SoldierCount01",
              "value": 1,
              "max": 2
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "isRefreshFlag",
        "SoldierCount02",
        "SoldierCount01"
      ]
    }
  ],
  "references": []
}