const configAbility = {
  "fileName": "3022011_Monster_W3_SundayPart_Ability06_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "team": "Enemy Team"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Medium"
          },
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Right",
            "invertCondition": true
          }
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left",
            "invertCondition": true
          },
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Medium"
          },
          {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Right"
          }
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "team": "Enemy Team",
        "location": "Max"
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}