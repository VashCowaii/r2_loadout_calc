const configAbility = {
  "fileName": "3024013_Monster_W2_Argenti_Ability10_IF_Part01",
  "childAbilityList": [
    "3024013_Monster_W2_Argenti_Ability10_IF_Part01",
    "3024013_Monster_W2_Argenti_Ability10_IF_Camera",
    "3024013_Monster_W2_Argenti_Ability21_IF_Part02",
    "3024013_Monster_W2_Argenti_Ability22_IF_Part02",
    "3024013_Monster_W2_Argenti_Ability23_IF_Part02",
    "3024013_Monster_W2_Argenti_Ability24_IF_Part02",
    "3024013_Monster_W2_Argenti_IF_Ability05_Part02"
  ],
  "skillTrigger": "Skill10",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "FlowerPower",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Modifier"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Eff01_Modifier"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_Ability09_IF_BOSS_Eff02_Modifier"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_IF_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "FlowerPower",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability21_IF_Part02",
          "isTrigger": true
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "FlowerPower",
        "compareType": "=",
        "value2": 2
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability22_IF_Part02",
          "isTrigger": true
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "FlowerPower",
        "compareType": "=",
        "value2": 3
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability23_IF_Part02",
          "isTrigger": true
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "FlowerPower",
        "compareType": "=",
        "value2": 4
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability24_IF_Part02",
          "isTrigger": true
        }
      ]
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    }
  ],
  "references": []
}