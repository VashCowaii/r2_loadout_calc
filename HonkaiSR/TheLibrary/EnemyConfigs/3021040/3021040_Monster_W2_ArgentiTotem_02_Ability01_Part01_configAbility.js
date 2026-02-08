const configAbility = {
  "fileName": "3021040_Monster_W2_ArgentiTotem_02_Ability01_Part01",
  "childAbilityList": [
    "3021040_Monster_W2_ArgentiTotem_02_Ability01_Part01",
    "3021040_Monster_W2_ArgentiTotem_02_Ability01_Part02",
    "3021040_Monster_W2_ArgentiTotem_02_Ability01_Camera",
    "3021040_Monster_W2_ArgentiTotem_02_Ability02_Camera",
    "3021040_Monster_W2_ArgentiTotem_02_AbilityP01_Insert",
    "3021040_Monster_W2_ArgentiTotem_02_AbilityP01_Part01",
    "3021040_Monster_W2_ArgentiTotem_02_AbilityP01_Camera",
    "3021040_Monster_W2_ArgentiTotem_02_AbilityP02_Camera"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W2_ArgentiTotem_02_Ability01_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-431168288\">Enemy_W2_Argenti_Power</a>[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-488812813\">Enemy_W2_Argenti_Power_RL</a>[<span class=\"descriptionNumberColor\">Soul Ascension</span>]"
          }
        ]
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "PowerFlag"
          },
          "ifTargetFound": [
            "Deleted bullshit"
          ]
        }
      ],
      "failed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "PowerFlag"
          },
          "ifTargetFound": [
            "Deleted bullshit"
          ]
        }
      ]
    }
  ],
  "references": []
}