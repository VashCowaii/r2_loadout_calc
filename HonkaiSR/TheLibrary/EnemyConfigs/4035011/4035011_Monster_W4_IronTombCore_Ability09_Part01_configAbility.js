const configAbility = {
  "fileName": "4035011_Monster_W4_IronTombCore_Ability09_Part01",
  "childAbilityList": [
    "4035011_Monster_W4_IronTombCore_Ability09_Part01",
    "4035011_Monster_W4_IronTombCore_Ability09_Camera"
  ],
  "skillTrigger": "Skill09",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1500971197\">W4_IronTombCore_RemoveAllCharge</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"144377800\">W4_IronTombCore_RemoveBreakEffect</a>"
    },
    "Deleted bullshit",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase2"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Level Entity}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1441620046\">Monster_W4_IronTombCore_QATest_NoEnding</a>"
      },
      "passed": [
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_WorldErosion",
          "value": 0
        }
      ]
    }
  ],
  "references": []
}