const configAbility = {
  "fileName": "Evernight_Evernight_Ability02_2_Servant",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1807727255\">Evernight_UltraMode_Effect_Normal</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1711321550\">function_Evernight_Group_FollowControl_00</a>"
    },
    {
      "name": "Trigger Multiple Functions",
      "variables": {},
      "functionList": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-293387564\">Evernight_Ability02_2_TriggerAnim_Pos</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"448281105\">Evernight_Ability02_2_TriggerAnim_01</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"397948248\">Evernight_Ability02_2_TriggerAnim_02</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"414725867\">Evernight_Ability02_2_TriggerAnim_03</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"498613962\">Evernight_Ability02_2_TriggerAnim_04</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"515391581\">Evernight_Ability02_2_TriggerAnim_05</a>"
        }
      ]
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-293387564\">Evernight_Ability02_2_TriggerAnim_Pos</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__448281105\">Evernight_Ability02_2_TriggerAnim_01</a>",
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1551336747\">function_Evernight_Group_FollowControl_STB</a>"
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__397948248\">Evernight_Ability02_2_TriggerAnim_02</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__414725867\">Evernight_Ability02_2_TriggerAnim_03</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__498613962\">Evernight_Ability02_2_TriggerAnim_04</a>",
      "parse": []
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__515391581\">Evernight_Ability02_2_TriggerAnim_05</a>",
      "parse": []
    }
  ],
  "references": []
}